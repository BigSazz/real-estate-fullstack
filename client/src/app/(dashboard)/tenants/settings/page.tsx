"use client";

import SettingsForm from "@/components/SettingsForm";
import {
  useGetAuthUserQuery,
  useUpdateTenantSettingsMutation,
} from "@/state/api";
import React from "react";

const TenantSettingsPage = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const {
    userInfo: { cognitoId, name, email, phoneNumber },
  } = authUser || {};

  const [updateTenant] = useUpdateTenantSettingsMutation();

  if (isLoading) return <>Loading...</>;

  const initialData = {
    name,
    email,
    phoneNumber,
  };

  const handleSubmit = async (data: typeof initialData) => {
    await updateTenant({
      cognitoId,
      ...data,
    });
  };

  return (
    <>
      <SettingsForm
        initialData={initialData}
        onSubmit={handleSubmit}
        userType="tenant"
      />
    </>
  );
};

export default TenantSettingsPage;
