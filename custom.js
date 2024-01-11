const posts = [{ title: 'POST1' }];

// Do not touch this function
function create2ndPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: 'POST2' });
      resolve();
    }, 3000);
  });
}

// Do not touch this function
function create3rPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push({ title: 'POST3' });
      resolve();
    }, 2000);
  });
}

// Do not touch this function
function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const poppedElement = posts.pop();
        resolve(poppedElement);
      } else {
        reject('ERROR: ARRAY IS EMPTY');
      }
    }, 1000);
  });
}

// Modify the lines below and use .then and .catch smartly to get the correct output.
async function performActions() {
  try {
    await create2ndPost();
    const deletedPost1 = await deletePost();
    console.log(deletedPost1.title);

    await create3rPost();
    const deletedPost2 = await deletePost();
    console.log(deletedPost2.title);

    const deletedPost3 = await deletePost();
    console.log(deletedPost3.title);

    const deletedPost4 = await deletePost();
    console.log(deletedPost4.title);
  } catch (errorMessage) {
    console.log(errorMessage);
  }
}

performActions();