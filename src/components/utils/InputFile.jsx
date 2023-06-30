import React, {useState} from 'react';
import { HiOutlinePaperClip } from "react-icons/hi";

export default function InputFile(props) {
    const [files, setFiles] = useState(0);

    return (
      <label className={'input-file ' + props.className}>
        {props.multiple ? (
          <input type="file" multiple onChange={(e) => setFiles(e.target.files.length)} />
        ) : (
          <input type="file" onChange={(e) => setFiles(e.target.files.length)} />
        )}
        <HiOutlinePaperClip />
        <div className="ind">{files > 0 && files}</div>
      </label>
    );
};