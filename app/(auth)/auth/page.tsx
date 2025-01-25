import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthPage() {
  return (
    <div className="w-full min-h-dvh bg-gradient-to-br from-sky-100 to-indigo-300 flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-2xl underline">Formulaire de connexion</h1>
      <form className="w-4/5 mx-auto flex flex-col gap-4 md:w-1/4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Entrez votre email" />
        </div>

        <div>
          <Label htmlFor="password">Mot de passe</Label>
          <Input type="password" placeholder="Entrez votre mot de passe" />
        </div>
        <div>
          <Label htmlFor="password">Confirmation mot de passe</Label>
          <Input type="password" placeholder="Confirmez votre mot de passe" />
        </div>
        <Button className="my-4">Connexion</Button>
      </form>
    </div>
  );
}

