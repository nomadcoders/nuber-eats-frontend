import { gql, useMutation } from "@apollo/client";
import React, { useEffect } from "react";
import {
  verifyEmail,
  verifyEmailVariables,
} from "../../__generated__/verifyEmail";

const VERIFY_EMAIL_MUTATION = gql`
  mutation verifyEmail($input: VerifyEmailInput!) {
    verifyEmail(input: $input) {
      ok
      error
    }
  }
`;

export const ConfirmEmail = () => {
  const [verifyEmail, { loading: verifyingEmail }] = useMutation<
    verifyEmail,
    verifyEmailVariables
  >(VERIFY_EMAIL_MUTATION);
  useEffect(() => {
    const [_, code] = window.location.href.split("code=");
    /*     verifyEmail({
      variables: {
        input: {
          code,
        },
      },
    }); */
  }, []);
  return (
    <div className="mt-52 flex flex-col items-center justify-center">
      <h2 className="text-lg mb-1 font-medium">Confirming email...</h2>
      <h4 className="text-gray-700 text-sm">
        Please wait, don't close this page...
      </h4>
    </div>
  );
};
