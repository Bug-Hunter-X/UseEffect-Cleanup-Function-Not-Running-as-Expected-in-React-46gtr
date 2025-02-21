```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial render.
    console.log('Effect ran!');
    return () => {
      // Cleanup function to run before the component unmounts or before the next effect runs.
      console.log('Cleanup function ran!');
    };
  }, []); // Add an empty dependency array to run only once after the initial render.

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```