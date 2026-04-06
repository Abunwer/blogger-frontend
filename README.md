# Frontend for Bloger

This is a Next.js application designed to work with the Wagtail backend.

## Connecting to the Wagtail API

To fetch content from the Wagtail API, you'll need to make requests to the appropriate endpoints. The base URL for the API will be your Wagtail site's URL plus `/api/v2`.

For example, to fetch a list of pages, you would make a GET request to `http://localhost:8000/api/v2/pages/`.

You can use a library like `axios` or the built-in `fetch` API in your Next.js components to retrieve data from the Wagtail API.

### Example: Fetching Pages

Here's an example of how you might fetch a list of pages in a Next.js component:

```javascript
async function getPages() {
  const res = await fetch('http://localhost:8000/api/v2/pages/');
  if (!res.ok) {
    throw new Error('Failed to fetch pages');
  }
  const data = await res.json();
  return data.items;
}

export default async function Page() {
  const pages = await getPages();

  return (
    <main>
      <h1>Pages</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>{page.title}</li>
        ))}
      </ul>
    </main>
  );
}
```

## Running the Development Servers

1.  **Backend (Wagtail):**
    ```bash
    cd ../backend
    source env/bin/activate
    python manage.py runserver
    ```

2.  **Frontend (Next.js):**
    ```bash
    cd ../frontend
    npm run dev
    ```

Now you can start developing your frontend application, fetching data from your Wagtail backend.