import React from "react";
import ReactQuill from "react-quill";
import { DeltaStatic, Sources, StringMap } from "quill";
// import { ImageResize } from "quill-image-resize-module-ts";
// Quill.register("modules/imageResize", ImageResize);

const modules: StringMap = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: [] }],
    // [{ font: [] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
  //   imageResize: {
  //     parchment: Quill.import("parchment"),
  //     modules: ["Resize", "DisplaySize"],
  //   },
};

/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats: string[] = [
  "header",
  //   "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
  "color",
  "background",
  "align",
  "script",
];

export type EditorProps = {
  handleChange: (
    value: string,
    delta: DeltaStatic,
    source: Sources,
    editor: ReactQuill.UnprivilegedEditor,
  ) => void;
  placeholder?: string;
  value?: ReactQuill.Value;
};

export const Editor = ({
  handleChange,
  placeholder = "Content goes here...",
  value,
}: EditorProps) => {
  return (
    <ReactQuill
      value={value}
      modules={modules}
      onChange={handleChange}
      formats={formats}
      theme="snow"
      placeholder={placeholder}
    />
  );
};
