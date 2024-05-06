// fetch call, invoke then pass string of url that has data needed
fetch('https://randomfox.ca/floof/')
    // response you get back is the parameter to response function // on that response is a method called json that does the conversion.
    .then(response => response.json())
    // converted data gets passed as an argument to function defined below
    .then(
        (convertedData) => {
            // references #fox element in html
            const foxImgElement = document.querySelector('#fox')
            // manipulates image source attribute of image element
            foxImgElement.src = convertedData.image
        }
    )

// ALTERNATIVE SYNTAX
//  async is needed on a function where await is inside it
const getTheCat = async () => {
    // capture response by awaiting fetch // gets data and generates response
    const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
    // converts string array into actual array // data awaits conversion and get stored inside convertedData variable
    const convertedData = await response.json()

    // references cat element in dom
    const catImgElement = document.querySelector('#cat')
    // manipulates src attribute of image with url found in [0]
    catImgElement.src = convertedData[0]
}

// must call as a function to get image with this syntax (unless calling it without using a function)
getTheCat()

// // ALTERNATIVE ALTERNATIVE SYNTAX
// //  can remove function entirely to avoid having to call function

//     const response = await fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
//     const convertedData = await response.json()

//     const catImgElement = document.querySelector('#cat')
//     catImgElement.src = convertedData[0]

// // OG SYNTAX
// // fetches image urls from api
// fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false')
//     // response is passed through json to do conversion
//     .then(response => response.json())
//     // converted data gets passed as an argument to function
//     .then(
//         (convertedData) => {
//             // references #cat element in html
//             const catImgElement = document.querySelector('#cat')
//             // converted data upon inspected is [0] instead of image. can be found in network tab of dev tools.
//             catImgElement.src = convertedData[0]
//         }
//     )