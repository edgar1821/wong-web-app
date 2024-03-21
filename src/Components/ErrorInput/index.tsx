type ErrorProps = {
  message: string;
};
function ErrorInput({ message }: ErrorProps) {
  return <span className="flex text-red-600">{message}</span>;
}
export default ErrorInput;
