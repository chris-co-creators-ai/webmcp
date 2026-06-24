<!--
Source: https://developer.chrome.com/docs/ai/webmcp/imperative-api
Mirrored verbatim from Google Chrome for Developers (developer.chrome.com).
© Google LLC — content licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/).
Archived for reference. Text extracted from the page's article body.
-->

# Imperative API

> Source: https://developer.chrome.com/docs/ai/webmcp/imperative-api

- [Home](https://developer.chrome.com/)  
- [Docs](https://developer.chrome.com/docs)  
- [AI on Chrome](https://developer.chrome.com/docs/ai)  
- [WebMCP](https://developer.chrome.com/docs/ai/agents)  
#  Imperative API Stay organized with collections Save and categorize content based on your preferences.  
[Alexandra Klepper](https://github.com/alexandrascript)[François Beaufort](https://github.com/beaufortfrancois)  
 
 Published: May 18, 2026, Last updated: June 18, 2026  [Explainer
    Web
    Extensions
    Chrome Status
    Intent
  
  
  
GitHub](https://github.com/webmachinelearning/webmcp)[Origin trial](https://developer.chrome.com/origintrials/#/register_trial/4163014905550602241)[View](https://chromestatus.com/feature/5117755740913664)[Intent to Experiment](https://groups.google.com/a/chromium.org/g/blink-dev/c/gmYffo5WOE8/m/OJxuQRP3AAAJ) 
You can use the WebMCP Imperative API to define many types of tools with standard JavaScript. Your tools can execute different functions, such as form input, site navigation, and state management. 
[Before using this API, read about example use cases](/docs/ai/webmcp). 
## Provide model context 
Use the `modelContext` interface to register tools. Tool registration requires a name, description, and input schema with relevant properties. 
Use `registertool` to add a single tool to the model context. 
### WebMCPza Maker
```
document.modelContext.registerTool({
  name: 'toggle_layer',
  description: 'Control pizza layers (sauce, cheese). Use "add", "remove", or "toggle".',
  inputSchema: {
    type: 'object',
    properties: {
      layer: { type: 'string', enum: ['sauce-layer', 'cheese-layer'] },
      action: { type: 'string', enum: ['add', 'remove', 'toggle'] },
    },
    required: ['layer'],
  },
  execute: async ({ layer, action }) => {
    await toggleLayer(layer, action);
    return `Performed ${action || 'toggle'} on layer: ${layer}`;
  },
});

```
 
### Get order status
```
document.modelContext.registerTool({
  name: 'get_order_status',
  description: 'Search orders in a given timeframe. Returns order number, shipping status and location',
  inputSchema: {
    "type": "object",
    "properties": {
      "timeframe": { "type": "string", "oneOf": [
        { "type": "string", "const": "today", "title": "Today" },
        { "type": "string", "const": "yesterday", "title": "Yesterday" },
        { "type": "string", "const": "last_7_days", "title": "Last 7 Days" },
        { "type": "string", "const": "last_30_days", "title": "Last 30 Days" },
        { "type": "string", "const": "last_6_months", "title": "Last 6 Months" }],
      "enum": [ "today", "yesterday", "last_7_days", "last_30_days", "last_6_months" ],
      "description": "Timeframe for the order lookup." }
    },
    "required": [ "timeframe" ]
  },
  execute: async ({ timeframe }) => {
    // Add your API or database logic here to fetch and return the order data as a string.
  },
});

```
 
You can remove a tool with `AbortSignal`, when passed as an optional parameter. 
```
const addTodoTool = {
  name: "addTodo",
  description: "Add a new item to the to-do list",
  inputSchema: {
    type: "object",
    properties: { text: { type: "string" } },
  },
  execute: async ({ text }) => {
    // You should handle the persistence logic here (omitted for demo)
    return `Added to-do: ${text}`;
  },
  annotations: {
    readOnlyHint: false,
    untrustedContentHint: true
  },
};
const controller = new AbortController();
document.modelContext.registerTool(addTodoTool, { signal: controller.signal });

// Unregister the tool later...
controller.abort();

```
 
## Discover tools 
Use `document.modelContext.getTools()` to retrieve available tools. This asynchronous method returns an alphabetically ordered list of tools that the calling document is authorized to access. 
```
const [tool] = await document.modelContext.getTools();
console.log(tool);

// {
//   annotations: { readOnlyHint: false, untrustedContentHint: true },
//   description: "Add a new item to the to-do list",
//   inputSchema: '{"type":"object","properties":{"text":{"type":"string"}}}',
//   name: "addTodo",
//   origin: "https://example.com",
//   window: Window {window: Window, self: Window, ...},
// }

```
 
By default, `getTools()` returns only same-origin tools registered by the calling document or other same-origin documents in the frame tree. To retrieve cross-origin tools, you must explicitly list their origins in the `fromOrigins` option. This array only supports secure origins. 
Tools from cross-origin documents are only included if: 
- The hosting origin is listed in the `fromOrigins` option. 
- [The tool has been explicitly exposed to your origin](#origin-exposure). 
```
// https://example.com

// Get same-origin tools only
const sameOriginTools = await document.modelContext.getTools();

// Get same-origin tools plus tools from specific cross-origin documents
const allTools = await document.modelContext.getTools({
  fromOrigins: ['https://partner.org']
});

```
 
[See the WebMCP Page Agent demo](https://github.com/GoogleChromeLabs/webmcp-tools/tree/main/demos/page-agent) for an example of how to retrieve tools from an iframe and execute them within a web-based chat interface. 
## Execute tool 
To manually execute a tool discovered in `getTools()`, call `document.modelContext.executeTool()` with input arguments as a valid JSON string. This asynchronous method returns the result of the tool execution, or null when a navigation is triggered. 
```
const result = await document.modelContext.executeTool(tool, '{"text": "Buy milk"}');
console.log(result);

// 'Added to-do: Buy milk'

```
 
You can cancel a pending tool execution with `AbortSignal`, when passed as an optional parameter. 
```
const controller = new AbortController();
document.modelContext.executeTool(tool, '{"text": "Buy milk"}', {
  signal: controller.signal,
});

// Cancel tool execution later...
controller.abort();

```
 
## Events 
Frames can listen for the `toolchange` event on `document.modelContext` to be notified when the list of available tools has changed. 
```
document.modelContext.addEventListener("toolchange", (event) => {
  // Tools have changed.
});

```
 
## Cross-origin iframes 
WebMCP supports cross-origin iframes that use both permission policies and explicit origin gating. 
### Permissions policy 
[Tool registration is disabled by default in cross-origin iframes. A page must
delegate access using the `tools`
Permissions Policy](/docs/privacy-security/permissions-policy): 
```
<iframe src="https://example.com" allow="tools"></iframe>

```
 
### Origin exposure 
Tools are unavailable to cross-origin documents by default. You can use the `exposedTo` array within `registerTool` to list specific origins allowed to view and execute a tool. This array only supports secure origins. 
```
// https://partner.org

document.modelContext.registerTool({
  name: 'my_shared_tool',
  description: 'Shared across origins',
  // ...
}, {
  exposedTo: ['https://example.com']
});

```
 
## Angular support 
[Angular has experimental support for WebMCP](https://angular.dev/ai/webmcp). If your application is already written with Angular, you can register tools tied to the application's dependency injection lifecycle and turn your Signal Forms into WebMCP tools. 
## Engage and share feedback 
WebMCP is under active discussion and subject to change in the future. If you try this API and have feedback, we'd love to hear it. 
- [Read the WebMCP explainer](https://github.com/webmachinelearning/webmcp?tab=readme-ov-file), raise questions and participate in discussion. 
- [Read WebMCP best practices](/docs/ai/webmcp/best-practices). 
- [Review the implementation for Chrome on
Chrome Status](https://chromestatus.com/feature/5117755740913664). 
- [Join the early preview program](http://goo.gle/chrome-ai-dev-preview-join) for an early look at new APIs and access to our mailing list. 
- [If you have feedback on Chrome's implementation, file a
Chromium bug](https://crbug.com/new?component=2021259). 
[Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/)[, and code samples are licensed under the Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)[. For details, see the Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates. 
Last updated 2026-06-18 UTC. [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-06-18 UTC."],[],[]]
