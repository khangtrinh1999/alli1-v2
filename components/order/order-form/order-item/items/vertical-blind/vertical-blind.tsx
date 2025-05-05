'use client";';
import React, { useState } from "react";
import { z } from "zod";
import {
  controlColors,
  controlTypes,
  fabricBrandBlockOut127,
  TrackColors,
} from "./data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ImageSelect } from "@/components/ui/image-select";
import { GridSelector } from "@/components/ui/grid-selector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Selections } from "@/lib/interface";
import SmartNumberInput from "@/components/ui/number-input";

const formSchema = z.object({
  controlType: z.string().min(1, "You must select an option"),
  controlColor: z.string().min(1, "You must select an option"),
  trackColor: z.string().min(1, "You must select an option"),
  fabricBrand: z.string().min(1, "You must select an option"),
  fabricName: z.string().min(1, "You must select an option"),
  pelmet: z.string().min(1, "You must select an option"),
  link: z.string().min(1, "You must select an option"),
  trackBrand: z.string().min(1, "You must select an option"),
  width: z
  .string()
  .min(1, { message: "Width is required" })
  .regex(/^\d+(\.\d+)?$/, { message: "Width must be a valid number" }),
});
function VerticalBlind() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      controlType: "Cord",
      controlColor: "White",
      trackColor: "White",
      fabricBrand: "1",
      fabricName: "",
      pelmet: "No",
      link: "No",
      trackBrand: "JAI",
      width: "",
    },
  });
  type FormValues = z.infer<typeof formSchema>;
  const [fabricName, setFabricName] = useState<Selections[]>([]);
  const onChangeFabricBrand = (subItems: Selections[]) => {
    setFabricName(subItems);
  };
  return (
    <div className="w-full flex flex-col">
      <Form {...form}>
        <form className="flex flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <FormField
              control={form.control}
              name="width"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1 custom-label">
                    Width<span className="text-red-500">*</span>
                  </FormLabel>
                  <div className="w-2/3">
                  <FormControl>
                    <SmartNumberInput
                      value={field.value}
                      onChange={field.onChange}
                      className="w-full"
                    ></SmartNumberInput>
                  </FormControl>
                  <FormMessage />
                  </div>
                  
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fabricBrand"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1 custom-label">
                    Fabric Type<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <GridSelector
                      className="w-2/3"
                      data={fabricBrandBlockOut127} // must match value keys
                      value={field.value}
                      onChange={field.onChange}
                      disabled={field.disabled}
                      setSubItem={onChangeFabricBrand}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fabricName"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1 custom-label">
                    Fabric Name
                  </FormLabel>
                  <FormControl>
                    <GridSelector
                      className="w-2/3"
                      data={fabricName} // must match value keys
                      value={field.value}
                      onChange={field.onChange}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="trackColor"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1 custom-label">
                    Track Color<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <ImageSelect
                      className="w-2/3"
                      data={TrackColors} // must match value keys
                      value={field.value}
                      onChange={field.onChange}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="trackBrand"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1 custom-label">
                    Track Brand<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-2/3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="JAI">JAI</SelectItem>
                        <SelectItem value="UNILINE">UNILINE</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <FormField
              control={form.control}
              name="controlType"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1 custom-label">
                    Control Type<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <ImageSelect
                      className="w-2/3"
                      data={controlTypes} // must match value keys
                      value={field.value}
                      onChange={field.onChange}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="controlColor"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1 custom-label">
                    Control Color<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <ImageSelect
                      className="w-2/3"
                      data={controlColors} // must match value keys
                      value={field.value}
                      onChange={field.onChange}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pelmet"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1 custom-label">
                    Pelmet<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-2/3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1 custom-label">
                    Link<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="w-2/3">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
}

export default VerticalBlind;
