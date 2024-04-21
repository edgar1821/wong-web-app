/* eslint-disable @typescript-eslint/no-explicit-any */
type ErrorProps = {
  message: string | any;
};
function ErrorInput({ message }: ErrorProps) {
  return <span className="flex text-red-600">{message}</span>;
}
export default ErrorInput;
