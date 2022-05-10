const App = () => {
  return (
    <div className='App'>
      <form>
        <label htmlFor='username'>Username: </label>
        <input name='username' type='text' />
        <label htmlFor='password'>Password: </label>
        <input name='password' type='password' />
        <label htmlFor='match'>Confirm Password: </label>
        <input name='match' type='password' />
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default App;
