"use client";
import { Toggler } from "@/components/admin/CustomInputs";
import SubmitBtn from "@/components/admin/SubmitBtn";
import Banner from "@/components/frontend/Banner";
import Heading from "@/components/frontend/Heading";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  makeDeleteRequest,
  makeGetRequest,
  makePostRequest,
  makePutRequest,
} from "@/lib/apiRequest";
import { toBase64 } from "@/lib/base64";
import { Camera, Trash2, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { formatDistanceToNow } from "date-fns";
import { useRouter } from 'next/navigation'

export default function Banners() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState([]);
  const fileRef = useRef(null);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [bannerStatus, setBannerStatus] = useState(false);

  const router = useRouter()

  function redirect() {
    router.refresh();
    setOpen(false);
    getBanners();
    setBannerStatus(true)
  }

  const { handleSubmit } = useForm();
  const maxSize = 1024 * 1024 * 5; //5mb

  async function handleChange(e) {
    const image = e.target.files[0];

    if (image.size > maxSize) {
      toast.error(`image size exceeds the maximum allowed size`);
      return false;
    }

    if (!image.type.startsWith("image")) {
      toast.error(`image has an invalid image type`);
      return false;
    }

    const base64 = await toBase64(image);

    if (!base64) {
      toast.error(`Error converting image to base64`);
      return false;
    }

    setFile([base64]);
  }

  async function submitHandler(data) {
    data.image = file;

    makePostRequest({
      setLoading,
      endpoint: "banners",
      data,
      reset,
      redirect,
      resourceName: "Banner",
    });
  }

  function reset() {
    setFile([]);

    fileRef.current.value = null;
  }

  async function getBanners() {
    const data = await makeGetRequest("banners");
    setData(data);
  }

  useEffect(() => {
    getBanners();
  }, []);

  function moment(date) {
    const result = formatDistanceToNow(new Date(date));

    return result;
  }

  async function handleUpdate(id, isActive) {
    makePutRequest({
      setLoading,
      endpoint: "banners",
      data: { id, isActive },
      redirect,
      resourceName: "Banner",
    });
  }

  async function handleDelete(id) {
    makeDeleteRequest({
      setLoading,
      endpoint: "banners",
      data: { id },
      redirect,
      resourceName: "Banner",
    });
  }

  return (
    <div className="space-y-10">
      <Heading heading={"Banners"} />
      <div className="banner w-full h-full relative">
        <div className="border banner_image border-slate-400">
          <Banner status={bannerStatus} setStatus={setBannerStatus} />
        </div>
        <p className="current_banner text-slate-400 bg-white absolute top-1 left-1 p-2 rounded-md text-base sm:text-lg">
          Current Banner
        </p>
        <Dialog open={open} onOpenChange={() => setOpen((prev) => !prev)}>
          <DialogTrigger className="banner_btn absolute top-0 right-0 py-2 px-3 mx-1 rounded-l-md hover:bg-yellow-600 hover:text-white dark:hover:bg-green-600 dark:hover:text-white bg-slate-100 dark:text-black flex gap-3 items-center shadow-md">
            <Camera />
            Change Banner
          </DialogTrigger>
          <DialogContent className="bg-white dark:bg-slate-900 border-0">
            <DialogHeader>
              <DialogTitle className="mb-5">Update Banner</DialogTitle>
              <div className="grid grid-cols-1 items-center gap-4">
                <form
                  onSubmit={handleSubmit(submitHandler)}
                  className="flex flex-col gap-5"
                >
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    required
                    ref={fileRef}
                    onChange={(e) => handleChange(e)}
                  />

                  {file && file.length > 0 && (
                    <div className="relative w-36 h-36 border border-slate-400 p-3 rounded-md flex justify-center mx-auto">
                      <Image
                        src={file[0]}
                        alt="Banner Preview"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-contain aspect-square"
                      />
                      <button type="reset" onClick={() => reset()}>
                        <X className="w-4 h-4 absolute -top-1 -right-1 rounded-full bg-red-400 text-white hover:bg-red-500 cursor-pointer" />
                      </button>
                    </div>
                  )}

                  <SubmitBtn
                    isLoading={loading}
                    title={"Update Banner"}
                    loadingTitle={"Updating Banner! Please Wait..."}
                  />
                </form>
              </div>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <Heading heading={"Banner Update History"} />

      {/* BANNERS GRID */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data && data.length > 0 ? (
          data.map((item, i) => (
            <div key={i} className="border-2 rounded-lg w-full h-full relative">
              <Image
                src={item.image[0]}
                alt={item.id}
                width={100}
                height={100}
                priority={false}
                className="w-full h-full object-contain aspect-square p-10"
              />
              {
                <Toggler
                  name={"banner_status"}
                  className="absolute top-0 right-0 p-2"
                  status={item.isActive}
                  onChange={() => handleUpdate(item.id, item.isActive)}
                />
              }
              {
                !item.isActive && <div className="absolute right-0 bottom-0 flex items-center gap-3 p-2">
                <Trash2 onClick={()=>handleDelete(item.id)} className="text-red-600 cursor-pointer" />
              </div>
              }
              <div className="absolute bottom-0 p-2 text-sm">
                Uploaded{" "}
                <span className="text-xs text-gray-400">
                  {moment(item.createdAt)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="md:w-[95vw] flex flex-col justify-center items-center gap-5">
            <h2 className="text-slate-400 text-xl">No Banners found!</h2>
            <button
              onClick={() => setOpen(true)}
              className="banner_btn py-2 px-3 mx-1 rounded-md hover:bg-yellow-600 hover:text-white dark:hover:bg-green-600 dark:hover:text-white bg-slate-100 dark:text-black flex gap-3 items-center shadow-md"
            >
              <Camera />
              Change Banner
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
