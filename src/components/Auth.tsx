import { useState } from "react";
import NumberInput from "./NumberInput";

type AuthProps = {
  setIsAuthenticated: (value: boolean) => void;
};

const Auth = ({ setIsAuthenticated }: AuthProps) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currOtp, setCurrOtp] = useState("");

  const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasError(false);
    setIsLoading(true);

    if (currOtp.length < 4) {
      setHasError(true);
      setErrorMessage("It is too short!!");
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      if (currOtp !== "0403") {
        setHasError(true);
        setErrorMessage("It is incorrect :(");
        setIsLoading(false);
        return;
      }
      setIsAuthenticated(true);
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col justify-between items-center overflow-hidden">
      <div className="flex flex-col gap-2 mb-4">
        <div className="font-bold">Verification Code</div>
        <div className="text-gray-600 text-sm">
          Enter the date of our first date (MMDD)
        </div>
      </div>
      <form onSubmit={(e) => handleAuth(e)}>
        <NumberInput
          autoFocus
          inputClassName={`mx-2 w-14 h-14 space-between text-4xl text-center border ${
            hasError ? "border-red-400" : "border-gray-400"
          } rounded-lg`}
          length={4}
          onChangeOTP={(otp) => setCurrOtp(otp)}
        />
        {hasError && (
          <div className="text-red-500 text-sm mx-2 pt-4">{errorMessage}</div>
        )}
        <button type="submit" className="button" disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2 animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                />
              </svg>
              Checking...
            </div>
          ) : (
            "Verify"
          )}
        </button>
      </form>
    </div>
  );
};

export default Auth;
