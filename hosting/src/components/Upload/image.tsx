import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { FormInstance, Input, Upload, message } from 'antd';
import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';
import { useEffect, useState } from 'react';
const token = localStorage.getItem("accessToken");

type PropTypes = {
  action: string;
  name: string;
  imagePublicID: string;
  imageUrl: string;
  onSuccess: (data: any) => void;
};

const UploadImage = (props: PropTypes) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    setImageUrl("");
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      console.log("info.file", info.file.response.data.SecureUrl)
      setLoading(false);
      setImageUrl(info.file.response.data.SecureUrl);
      props.onSuccess({
        ImageProfile: info.file.response.data.SecureUrl,
        PublicId: info.file.response.data.PublicId
      })
    }
  };


  const beforeUpload = (fileUpload: RcFile) => {
    const isJpgOrPng = fileUpload.type === 'image/jpeg' || fileUpload.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG fileUpload!');
    }
    const isLt2M = fileUpload.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  useEffect(() => {
    setImageUrl(props.imageUrl);

  }, [props.imageUrl]);

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <>
      <Upload
        action={props.action}
        headers={{ Authorization: `Bearer ${token}` }}
        listType="picture-card"
        showUploadList={false}
        onChange={handleChange}
        beforeUpload={beforeUpload}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </>
  );
};

export default UploadImage;