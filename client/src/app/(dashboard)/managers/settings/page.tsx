"use client";

import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateManagerSettingsMutation,
} from "@/state/api";
import React from "react";

const ManagerSettingsPage = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const {
    userInfo: { cognitoId, name, email, phoneNumber },
  } = authUser || {};

  const [updateManager] = useUpdateManagerSettingsMutation();

  if (isLoading) return <>Loading...</>;

  const initialData = {
    name,
    email,
    phoneNumber,
  };

  const handleSubmit = async (data: typeof initialData) => {
    await updateManager({
      cognitoId,
      ...data,
    });
  };

  return (
    <>
      <SettingsForm
        initialData={initialData}
        onSubmit={handleSubmit}
        userType="manager"
      />
    </>
  );
};

export default ManagerSettingsPage;
