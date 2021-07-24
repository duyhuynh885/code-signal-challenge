function* fetchData(i) {
  yield i + 1;
  console.log("Dòng này sẽ được in khi next() lần 2");
  yield i + 2;
  console.log("Dòng này sẽ được in khi next() lần 3");
  yield i + 3;
  return i + 4;
}

fetchData().next();
fetchData().next();
fetchData().next();
