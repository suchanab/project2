// let obj={
//    name:"suchana",
//    Course:"csit",
//    semester:1,
//    employed:false,
//    hello:function(){
//     console.log(`my name is ${this.name}`)
//    }


// }
// obj.hello()


// console.log(obj)
// console.log(obj.name)
// console.log(obj.Course)
// console.log(obj.semester)

//  async function hello()
//  {
//     let firstname: await suchana
//     console.log(firstname)

// }
// hello()

const btn=document.querySelector(".btn")
const cityInput=document.querySelector("#city")
const temp=document.querySelector("#temp-div")





btn.addEventListener("click", async function(){
    let city=cityInput.value
const weatherinfo= await getWeatherInfo(city)
console.log(weatherinfo.main.temp);
let temperature=weatherinfo.main.temp
temp.innerHTML=temperature+"°C"
})


 async function getWeatherInfo(city){
    const apiKey="44c17ed2f1ebb5c9b9e5b362ccb6938f"
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    

    
        const response=await fetch(apiUrl);
        const data= await response.json()
        return data;
        
    

    

}

