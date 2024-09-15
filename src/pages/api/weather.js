export default async function POST(request, response) {
  // get the data from the body as a readableStream
  const data = request.body
  // convert the readableStream into a string
  const result = await streamToString(data)
  // then parse the string
  const objectResult = JSON.parse(result)

  // separating the variables from the data to pass to firebase
  const lat = objectResult.lat
  const lon = objectResult.lon
  const limit = objectResult.limit  
  
  try{
    let res = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${process.env.API_KEY}`).then(res => res.json())
    response.status(200).json({message: res})
  }
  catch(e){
    response.status(400).json({message: e})
  }
}

async function streamToString (stream) {
  const chunks = [];
  for await(const chunk of stream) {
      chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString("utf-8");
}