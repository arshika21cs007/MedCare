import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

//interface--used to define the shape of an object.specifies what properties an object should have, along with their types.
interface ButtonProps {
  isLoading: boolean;
  //Classname optional of string
  className?: string;
  children: React.ReactNode;
}

const SubmitButton = ({ isLoading, className, children }: ButtonProps) => {
  return (
    <Button
      type="submit"
      // Disables the button if isLoading is true, preventing any further clicks while an action is in progress.
      disabled={isLoading}
      //Applies the className prop if provided; otherwise, it defaults to "shad-primary-btn w-full". This sets the button's style.
      className={className ?? "shad-primary-btn w-full"}
    >
      {/* The button will be disabled preventing any further clicks while an action is in progress.*/}
      {/* If isLoading is true, the button shows a loading spinner (<Image src="/assets/icons/loader.svg" ... />) alongside the text "Loading ...". The spinner is an image with an animation class (animate-spin). */}
      {isLoading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading ...
        </div>
      ) : (
        // If isLoading is false, the button displays its children, which could be Get Started which is passed to the SubmitButton and will be clickable.
        children
      )}
    </Button>
  );
};

export default SubmitButton;
