"use client"

//<FormItem> me changes karne hoti ha
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input"
import { client } from "@/sanity/lib/client"

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  email: z.string().email()
})

const Contactform = () => {

type formType =  z.infer<typeof formSchema>

const form = useForm<formType>({
    //react ko bataya ha key zod ka scheme use kar rahe ha
    resolver: zodResolver(formSchema),

})


async function onSubmit(values: formType) {

  // sanity me data insert kar raha ha
  // data frontend se sanity me insert karna 
  await client.create({
    _type : "contactForm",
    name: values.firstName,
    email: values.email

  })
// values la raha ha
// submit wali value la raha ha 
  console.log(values)
}
 
  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FirstName</FormLabel>
              <FormControl>
                <Input placeholder="firstName" {...field} />
              </FormControl>

            {/* //error message you can move the message  */}
              <FormMessage />  
            </FormItem>
          )}
        />
        {/* formfield  */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>

            {/* //error message you can move the message  */}
              <FormMessage />  
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </>
)
}

export default Contactform