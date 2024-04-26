import React from "react";

type InputTypes = React.InputHTMLAttributes<HTMLInputElement>;

interface IProps extends InputTypes{
  text : string;
}

function ContactUsDialogInput(props : IProps) {
  return (
    <div className="w-full">
      <span className="text-sm text-white">{props.text}</span>
      <input {...props} className="w-full bg-white outline-none text-sm px-3 py-1 mt-1" type="text" />
    </div>
  );
}

export default ContactUsDialogInput;
