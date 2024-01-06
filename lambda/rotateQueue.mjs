/* global fetch */
// import fetch from 'node-fetch';

export const handler = async (event) => {
  console.log('Sending request to Cube Cobra to rotate queue.');

  const data = {
    token: '7d113984-2aac-428c-ab06-ed91d6c1c726',
  };

  try {
    const response = await fetch('https://cubecobra.com/job/featuredcubes/rotate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const responseData = await response.text();
      console.log('Successfully rotated queue.');
      console.log(responseData);
    }
  } catch (error) {
    console.log('Error:');
    console.error(error);
  }
};
