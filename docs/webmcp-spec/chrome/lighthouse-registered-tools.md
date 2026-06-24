<!--
Source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/registered-webmcp-tools
Mirrored verbatim from Google Chrome for Developers (developer.chrome.com).
© Google LLC — content licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/).
Archived for reference. Text extracted from the page's article body.
-->

# Registered WebMCP tools

> Source: https://developer.chrome.com/docs/lighthouse/agentic-browsing/registered-webmcp-tools

- [Home](https://developer.chrome.com/)  
- [Docs](https://developer.chrome.com/docs)  
- [Lighthouse](https://developer.chrome.com/docs/lighthouse)  
- [Agentic browsing audits](https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring)  
#  Registered WebMCP tools Stay organized with collections Save and categorize content based on your preferences.  
Registered tools are the specific capabilities (like "Book a Table" or "Add to Cart") that your website exposes to AI agents. 
## How the Registered WebMCP tools audit works 
This audit is informational. Lighthouse lists all WebMCP tools registered on the page using the Declarative or Imperative APIs. If no tools are registered, the result list will be empty. 
## How to fix 
You can register tools using either the Declarative API or the Imperative API: 
- Declarative API: Add `toolname` and `tooldescription` attributes directly to your `<form>` elements. 
- Imperative API: Use JavaScript to register tools using `navigator.modelContext.registerTool`. 
## Best practices 
- Use clear, action-oriented names (for example, `toolname="book_appointment"`). 
- Provide detailed descriptions that explain what the tool does and when an agent should use it. 
- [If you want to learn more, read the WebMCP documentation](/docs/ai/webmcp). 
[Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/)[, and code samples are licensed under the Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)[. For details, see the Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates. 
Last updated 2026-05-05 UTC. [[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Missing the information I need","missingTheInformationINeed","thumb-down"],["Too complicated / too many steps","tooComplicatedTooManySteps","thumb-down"],["Out of date","outOfDate","thumb-down"],["Samples / code issue","samplesCodeIssue","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-05-05 UTC."],[],[]]
