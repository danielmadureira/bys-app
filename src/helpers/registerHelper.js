import { sha256 } from "js-sha256";

export const encryptPassword = (
  password
) => {
  return sha256(password)
}