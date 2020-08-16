export type TResponse<T> = {
  statusCode?: number;
  status: "success" | "error";
  response: T | null;
};
