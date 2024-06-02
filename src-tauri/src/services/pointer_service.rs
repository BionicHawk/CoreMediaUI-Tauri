use std::process;

#[tauri::command]
pub fn start_pointer(ip: &str) -> i64 {
    let result = process::Command::new(".\\Components\\WirelessPointerDriver.exe")
        .current_dir(".\\Components")
        .arg(ip)
        .arg("3002")
        .spawn();

    if let Ok(proc) = result {
        return proc.id() as i64;
    }
    
    return -1;
}

#[tauri::command]
pub fn close_pointer(pid: i64) -> bool {
    let result = process::Command::new("taskkill")
        .arg("-pid")
        .arg(pid.to_string())
        .arg("-f")
        .spawn();

    if let Ok(_) = result {
        return true;
    }

    return false;
}