import { Button, Input } from "@mui/material"
import { Controller, useFormContext } from "react-hook-form"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const ReuseInputFile = ({name,label,sx}) => {
    const {control} = useFormContext()
  return (
    <Controller 
    control={control}
    name={name}
    render={({field:{onChange, value, ...field}})=>{
       return (
           <Button
           component="label"
           variant="contained"
           tabIndex={-1}
           startIcon={<CloudUploadIcon />}
           sx={{...sx}}
         >
         {label || " Upload file"}
          <Input {...field} type='file'
           onChange={(e) => onChange(e.target.files[0])}
           style={{display:'none'}}
          />
         </Button>
       )
    }}

    
   
   />
  )
}

export default ReuseInputFile