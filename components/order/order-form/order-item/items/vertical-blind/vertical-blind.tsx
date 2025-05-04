'use client";';
import React from "react";
import { z } from "zod";
import { controlTypes } from "./data";
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
const formSchema = z.object({
  controlType: z.string().min(1, "You must select an option"),
});
function VerticalBlind() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      controlType: "cord",
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
          </form>
        </Form>
      </div>
    </div>
  );
}

export default VerticalBlind;
