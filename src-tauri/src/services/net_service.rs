use dns_lookup::get_hostname;

#[tauri::command]
pub fn get_ips() -> Option<Vec<String>> {
    let hostname = get_hostname().unwrap();
    let ips_result = dns_lookup::lookup_host(hostname.as_str());

    if let Ok(ips) = ips_result {
        let mut addresses: Vec<String> = vec![];
        
        for ip in ips {
            if ip.is_ipv4() {
                addresses.push(ip.to_string());
            }
        }

        return Some(addresses);
    }

    return None;
}