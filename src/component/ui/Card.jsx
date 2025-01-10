import React from "react";
import classNames from "classnames";

export function Card({ className, children }) {
  return <div className={classNames("", className)}>{children}</div>;
}

export function CardHeader({ className, children }) {
  return <div className={classNames("p-4 border-b", className)}>{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-lg font-bold">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-sm text-gray-500">{children}</p>;
}

export function CardContent({ className, children }) {
  return <div className={classNames("", className)}>{children}</div>;
}

export function CardFooter({ className, children }) {
  return <div className={classNames("p-4 border-t", className)}>{children}</div>;
}
