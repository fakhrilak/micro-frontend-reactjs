import { FcAddDatabase, FcDeleteDatabase, FcUpload } from "react-icons/fc"

export const header3 = [
    {
      "name" : "Delet",
      "color"  : "bg-red-500",
      "type" : "del",
      "view" : <FcDeleteDatabase size={30}/>
    },
    {
      "name" : "Update",
      "color" : "bg-yellow-500",
      "type" : "edit",
      "view" : <FcUpload size={30}/>
    },
    {
      "name" : "ADD",
      "color"  : "bg-green-500",
      "type" : "add",
      "view" : <FcAddDatabase size={30}/>
    }
  ]

  export const Singgleheader = [
    {
        "name" : "ADD",
        "color"  : "bg-green-500",
        "type" : "add",
        "view" : <FcAddDatabase size={30}/>
    }
  ]