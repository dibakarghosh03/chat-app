import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefObject, useRef, useState } from "react";
import { FaCamera, FaEye, FaEyeSlash, FaRegUserCircle } from "react-icons/fa";
import {} from "react-icons/fa";
import { useFileHandler, useInputValidation } from "6pp";
import { passwordValidator, usernameValidator } from "@/utils/validators";

const Auth = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement>() as RefObject<HTMLInputElement>;

  const name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const bio = useInputValidation("");
  const password = useInputValidation("", passwordValidator);

  const login_username = useInputValidation("");
  const login_password = useInputValidation("");

  const avatar = useFileHandler("single");

  const handleLogin = () => {
    console.log(login_username.value, login_password.value);
  };

  const handleSignup = () => {
    console.log(name.value, bio.value, username.value, password.value);
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-custom-gradient">
      <div className="w-fit h-fit bg-transparent rounded-xl shadow-2xl shadow-gray-900">
        <Tabs defaultValue="signup" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signup">Signup</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create Account</CardTitle>
                <CardDescription>
                  Create a new account to connect with your friends.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-center relative w-[150px] h-[150px] mx-auto bg-gray-400 rounded-full">
                  <div>
                    <FaRegUserCircle
                      className={`size-32 text-gray-200 ${
                        avatar.preview ? "hidden" : "block"
                      }`}
                    />
                  </div>
                  <img
                    className={`${avatar.preview ? "block" : "hidden"} rounded-full w-full h-full object-fill`}
                    src={avatar.preview}
                  />
                  <div className="h-fit w-fit p-2 bg-gray-300 rounded-full absolute bottom-2 right-2 cursor-pointer">
                    <FaCamera
                      onClick={() => {
                        inputRef?.current?.click();
                      }}
                      className="text-gray-600"
                    />
                    <input
                      type="file"
                      ref={inputRef}
                      className="hidden"
                      onChange={avatar.changeHandler}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label>Name</Label><span className="text-red-500">{" "}*</span>
                  <Input
                    value={name.value}
                    onChange={name.changeHandler}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Bio</Label><span className="text-red-500">{" "}*</span>
                  <Input
                    value={bio.value}
                    onChange={bio.changeHandler}
                    placeholder="Enter your bio"
                  />
                </div>
                <div className="space-y-1">
                  <Label>Username</Label><span className="text-red-500">{" "}*</span>
                  <Input
                    value={username.value}
                    onChange={username.changeHandler}
                    placeholder="Enter an username"
                  />
                  {username.error && (
                    <span className="text-red-400 ml-2">{username.error}</span>
                  )}
                </div>
                <div className="space-y-1">
                  <Label>Password</Label><span className="text-red-500">{" "}*</span>
                  <div className="relative">
                    <Input
                      value={password.value}
                      onChange={password.changeHandler}
                      placeholder="Enter a password"
                      type={passwordVisible ? "text" : "password"}
                    />
                    {password.error && (
                      <span className="text-red-400 ml-2">
                        {password.error}
                      </span>
                    )}
                    {!passwordVisible ? (
                      <div
                        className={`absolute right-2 ${
                          password.error ? "top-[14%]" : "top-[23%]"
                        }`}
                      >
                        <FaEye
                          size={20}
                          className="cursor-pointer"
                          onClick={() => setPasswordVisible((a) => !a)}
                        />
                      </div>
                    ) : (
                      <div className="absolute right-2 top-[50%]">
                        <FaEyeSlash
                          size={20}
                          className="cursor-pointer"
                          onClick={() => setPasswordVisible((a) => !a)}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant={"destructive"}>Signup</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Log into your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label>Username</Label><span className="text-red-500">{" "}*</span>
                  <Input
                    value={login_username.value}
                    onChange={login_username.changeHandler}
                    type="text"
                    placeholder="Enter your username"
                  />
                </div>
                <div className="space-y-1 relative">
                  <Label>Password</Label><span className="text-red-500">{" "}*</span>
                  <Input
                    value={login_password.value}
                    onChange={login_password.changeHandler}
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Enter your password"
                  />
                  {!passwordVisible ? (
                    <div className="absolute right-2 top-[50%]">
                      <FaEye
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setPasswordVisible((a) => !a)}
                      />
                    </div>
                  ) : (
                    <div className="absolute right-2 top-[50%]">
                      <FaEyeSlash
                        size={20}
                        className="cursor-pointer"
                        onClick={() => setPasswordVisible((a) => !a)}
                      />
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant={"destructive"}>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
