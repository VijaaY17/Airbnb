import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Perks from "./Perks"
export default function PlacesPage ()
{
 const {action} = useParams()
 const [title,setTitle] = useState(' ')
 const [address,setAddress] = useState('')
 const [addPhoto,setAddPhoto] = useState([])
 const [photoByLink,setPhotoByLink] = useState('')
 const [description,setDescription] = useState('')
 const [perks,setPerks] = useState(' ')
 const [extraInfo,setExtraInfo] = useState('')
 const [checkin,setCheckin] = useState('')
 const [checkout,setCheckout] = useState(' ')
 const [guests,setGuests] = useState(1)


  return (
    <div>
      {action!== 'new' && (
        <div className="text-center ">
  
        <Link className="inline-flex gap-1 mt-4 bg-[#E41D56] text-white rounded-full px-4 py-2" to = "/account/places/new"> Add new place
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
   
      </Link>
      </div>
      )}
      {action==='new' && (
        <div>
          <form className="space-y-4 mt-8 ml-4">
            <h2 className="text-xl">Title</h2>
            <input className=" block w-full p-2 border rounded-full" 
            type="text" 
            placeholder="Title"
            value={title}
            onChange={(e) =>{setTitle(e.target.value)}}
            />
            <h2 className="text-xl">Address</h2>
            <input className="block w-full p-2 border rounded-full" 
            type="text" 
            placeholder="address"
            value={address}
            onChange={(e) =>{setAddress(e.target.value)}}
            />
            <h2 className="text-xl">Photos</h2>
            <div className="flex gap-2">
            <input
            type="text"
            placeholder="add using link"
            className="flex-grow p-2 border rounded-full"
            />
          <button className="px-4 py-2 mr-2 bg-[#E41D56] text-white border rounded-full">Add photos</button>
        </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <button className="border bg-transparent rounded-2xl p-8 text-gray-600">Upload from your device</button>
            </div>
            <h2 className="text-xl">Description</h2>
            <textarea className="border p-8 text-gray-600 w-full"
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}
            />
            <h2 className="text-xl">Perks</h2>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2">
              <Perks selected = {perks} onChange ={setPerks}/>
              
            </div>
            <h2 className="text-xl">Extra Info</h2>
            <textarea className="border p-8 text-gray-600 w-full"
            value={extraInfo}
            onChange={(e) =>{setExtraInfo(e.target.value)}}
            />
            <h2 className="text-xl">Check In & Out times</h2>
            <div className="grid sm:grid-cols-3 mb-12 gap-8">
              <div>
                <h3 className="mb-1">Check in time</h3>
                <input type="text"
                 placeholder="14:00"
                 value={checkin}
                 onChange={(e) =>{setCheckin(e.target.value)}}
                 />
              </div>

              <div>
                <h3 className="mb-1">Check out time</h3>
                <input type="text" 
                placeholder="15:00"
                value={checkout}
                onChange={(e) =>{setCheckout(e.target.value)}}
                />
              </div>

              <div>
                <h3 className="mb-1">Max No of Guests:</h3>
                <input type="number" 
                placeholder="4"
                className="w-full border my-1 py-2 px-3 rounded-2xl"
                value={guests}
                onChange={(e) =>{setGuests(e.target.value)}}/>
              </div>
            </div>
            <button className="bg-[#E41D56] text-white rounded-full w-4/5 px-4 py-2 mx-auto block mt-12 mb-12">Save</button>



          </form>
          </div>
      )}
    
    
    </div>
  )
}


