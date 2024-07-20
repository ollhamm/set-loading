"use client";
import { useState } from "react";
import React from "react";
import { ApiCall } from "../api";
import useStore from "../store";

const upload = () => {
  const { loading, setLoading } = useStore();

  const uploadedClick = async () => {
    try {
      setLoading(true);
      await ApiCall();
    } catch {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-center">
      <div>Upload Page</div>
      <button
        onClick={uploadedClick}
        disabled={loading}
        className="bg-blue-300 disabled:opacity-50 items-center justify-center py-3 px-2 rounded-md hover:bg-blue-400"
      >
        Upload
      </button>
    </div>
  );
};

export default upload;
