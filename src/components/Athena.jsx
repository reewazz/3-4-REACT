import { PasswordInput, Rating, Select, Text, TextInput } from "@mantine/core"
import heroImage from "../assets/athena/temple2.png"
import { useState } from "react"

function Athena(){

const [rating,setRating] = useState(4)
    return (
        <>
        

    <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="red">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
      <PasswordInput label = "Full Name" placeholder="Your full name" withAsterisk/>

        <Select
      label="Your favorite library"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte',"Mern"]}
       clearable
         searchable
    />
    <Rating value={rating} onChange={setRating}/>
    </>
    )
}
export default Athena