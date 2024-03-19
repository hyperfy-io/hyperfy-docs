---
sidebar_position: 0
---

# SECRETS

Apps run on both the server and client which can be an issue if you want to do something securely like submit high scores or reward players. To solve this, we allow you to bundle secrets with your app, and those variables will only be available from the code that runs on the server.

Secrets can be used to store private API URLs, API tokens etc.

To use secrets in your app, simply add a `secrets.json` file to your app folder, populated with things you only want to access on the server:

```json
{
  "apiKey": "2k3jh5k3jh4...",
  "apiUrl": "https://www..."
}
```

You can then access them directly in your app code using the globally available `SECRETS` utility, and they will only be available on the server side:

```jsx
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // highlight-start
    console.log("API Key: ", SECRETS.apiKey);
    console.log("API URL: ", SECRETS.apiUrl);
    // highlight-end
  }, []);
  return <app />;
}
```