'use client";';
import React from "react";
import { z } from "zod";
import { controlColors, controlTypes, fabricBrandBlockOut89, KamarBlockOut, SkyBlockout, TrackColors, VibeBlockout } from "./data";
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
const formSchema = z.object({
  controlType: z.string().min(1, "You must select an option"),
  controlColor: z.string().min(1, "You must select an option"),
  trackColor: z.string().min(1, "You must select an option"),
  fabricBrand: z.string().min(1, "You must select an option"),
  fabricName: z.string().min(1, "You must select an option"),
});
function VerticalBlind() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      controlType: "Cord",
      controlColor: "White",
      trackColor: "White",
      fabricBrand: "1",
      fabricName:""
    },
  });
  type FormValues = z.infer<typeof formSchema>;
  return (
    <div className="w-full flex flex-col">
      <div className="w-full grid grid-cols-2 gap-10">
        <Form {...form}>
          <form className="space-y-4">
          <FormField
              control={form.control}
              name="fabricBrand"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1">Fabric Type<span className="text-red-500">*</span></FormLabel>
                  <FormControl >
                    <GridSelector
                      className="w-2/3"
                      data={fabricBrandBlockOut89} // must match value keys
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
              name="fabricName"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1">Fabric Name</FormLabel>
                  <FormControl >
                    <GridSelector
                      className="w-2/3"
                      data={KamarBlockOut} // must match value keys
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
              name="controlType"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1">Control Type<span className="text-red-500">*</span></FormLabel>
                  <FormControl >
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
                  <FormLabel className="flex gap-1">Control Color<span className="text-red-500">*</span></FormLabel>
                  <FormControl >
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
              name="trackColor"
              render={({ field }) => (
                <FormItem className="flex flex-row justify-between gap-4">
                  <FormLabel className="flex gap-1">Track Color<span className="text-red-500">*</span></FormLabel>
                  <FormControl >
                    <ImageSelect
                      className="w-2/3"
                      data={TrackColors

                      } // must match value keys
                      value={field.value}
                      onChange={field.onChange}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}

export default VerticalBlind;
