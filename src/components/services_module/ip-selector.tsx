import { Dropdown, Title3, Option } from "@fluentui/react-components";
import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";

export default function IpSelector(props: IpSelectorProps) {
  const [addresses, setAddresses] = useState<string[]>();

  async function getAddresses() {
    const adds: string[] | null = await invoke("get_ips");
    if (adds !== null) {
      setAddresses(adds);
    }
  }

  useEffect(() => {
    getAddresses();
  }, []);

  return (
    <>
      <Title3>Seleccione una IP</Title3>
      <Dropdown onActiveOptionChange={(_, data) => {
        props.onSelected(data.nextOption!.text);
      }}>
        {addresses !== undefined ? (
          addresses.map((address) => <Option key={address}>{address}</Option>)
        ) : (
          <></>
        )}
      </Dropdown>
    </>
  );
}

type IpSelectorProps = {
    onSelected: (value: string) => void
}
