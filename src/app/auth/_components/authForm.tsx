'use client'

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@radix-ui/react-separator";
import { useForm }  from "react-hook-form";

export function AuthForm() {
   const form = useForm();
   const handleSubmit = form.handleSubmit((data) => {
      console.log(data);
   })

   return (
      <main className="h-screen flex w-full">

         <section className="flex items-center justify-center bg-background h-full max-w3xl w-full p-4">
            <Card className="w-full max-w-md">
               <CardHeader>
                  <CardTitle className="text-2xl flex justify-center items-center font-bold tracking-tighter">
                     GestãoBela
                  </CardTitle>

               </CardHeader>
               <CardContent>
                  <form onSubmit={handleSubmit}>
                     <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input id="email" placeholder="gestaobela@gmail.com" type="email" {...form.register('email')} />
                     </div>
                     <div className="mt-4">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" placeholder="Sua senha" type="password" />
                     </div>
                     <Button className="mt-6 w-full" type="submit">Entrar</Button>
                     <div className="flex justify-center items-center gap-6 mt-4">
                        <Separator />
                        <span className="text-xs text-muted-foreground">OU</span>
                        <Separator />
                     </div>
                     <Button variant="outline" className="mt-4 w-full font-semibold">
                        <div className="mr-2">
                           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                           </svg>
                        </div>
                        Entrar com o Google
                     </Button>
                  </form>
               </CardContent>
               <CardFooter>
                  <p className="text-muted-foreground text-center text-sm">Ao entrar no <span className="font-bold text-primary">GestãoBela</span> você concorda com os nossos Termos de Uso e Política de Privacidade</p>
               </CardFooter>
            </Card>
         </section>
      </main>
   )
}