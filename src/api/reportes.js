import {BASE_API} from '../utils/constantes'
export async function getReport(request){
    try {
        
        const url =  `${BASE_API}/report`
            
        //console.log("url",url)
        const params = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(request)
        }
       
        const response = await fetch(url,params)
       console.log(response)
        if(response.status === 200){
           
            const result= await response.json()
            console.log(result)
          
            return result
            
        }
        return false 
        
    } catch (error) {
        throw new Error (error)
    }
}