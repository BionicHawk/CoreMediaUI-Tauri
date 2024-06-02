use std::process::{self, Command};

#[tauri::command]
pub fn run_server(ip: &str) -> i64 {
    let result = Command::new(".\\Components\\server.exe")
        .current_dir(".\\Components")
        .arg(ip)
        .arg("3001")
        .spawn();
    
    if let Ok(child) = result {
        return child.id() as i64;
    }
    if let Err(e) = result {
        println!("{}", e);
    }
    return -1;
}

#[tauri::command]
pub fn close_server(pid: i32) -> bool {
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