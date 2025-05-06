'use client";';
import React, { useState } from "react";
import { z } from "zod";
import {
  controlColors,
  controlTypes,
  fabricBrandBlockOut127,
  TrackColors,
  VibeBlockout,
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
    },
  });
  type FormValues = z.infer<typeof formSchema>;
  const [fabricName, setFabricName] = useState<Selections[]>(VibeBlockout);
  const onChangeFabricBrand = (subItems: Selections[]) => {
    setFabricName(subItems);
  };

  const [width, setWidth] = useState<string>("0");
  const [height, setHeight] = useState<string>("0");

  return (
    <div className="w-full flex flex-col">
      <Form {...form}>
        <form className="flex flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
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

      <div className="flex flex-col my-6 w-full overflow-x-scroll no-scrollbar py-2">
        <div className="flex flex-row gap-4 w-fit">
          <div className="table-label w-[120px]">Action</div>
          <div className="table-label w-[50px]">No</div>
          <div className="table-label w-[200px]">Location</div>
          <div className="table-label w-[80px]">Width</div>
          <div className="table-label w-[80px]">Height</div>
          <div className="table-label w-[200px]">Control Stack</div>
          <div className="table-label w-[200px]">Control Length</div>
          <div className="table-label w-[150px]">Fitting</div>
          <div className="table-label w-[200px]">Fitting To</div>
          <div className="table-label w-[500px]">Note</div>
          <div className="table-label w-[500px]">Extra</div>
          <div className="table-label w-[100px]">Price</div>
        </div>
        <div className="flex flex-row gap-4 w-fit">
          <div className="table-label w-[120px]"></div>
          <div className="table-label w-[50px]"></div>
          <div className="table-label w-[200px]"></div>
          <div className="table-label w-[80px]"><SmartNumberInput value={width} onChange={setWidth}></SmartNumberInput></div>
          <div className="table-label w-[80px]"><SmartNumberInput value={height} onChange={setHeight}></SmartNumberInput></div>
          <div className="table-label w-[200px]"></div>
          <div className="table-label w-[200px]"></div>
          <div className="table-label w-[150px]"></div>
          <div className="table-label w-[200px]"></div>
          <div className="table-label w-[500px]"></div>
          <div className="table-label w-[500px]"></div>
          <div className="table-label w-[100px]"></div>
        </div>
      </div>
    </div>
  );
}

export default VerticalBlind;
