deno_graph = "0.25.0"
deno_lint = { version = "0.28.0", features = ["docs"] }
deno_runtime = { version = "0.50.0", path = "../runtime" }
deno_task_shell = "0.1.9"
deno_task_shell = "0.2.0"

atty = "=0.2.14"
base64 = "=0.13.0"
FROM mcr.microsoft.com/vscode/devcontainers/rust:0-1

# Update to Rust 1.58.0
RUN rustup update 1.58.0 && rustup default 1.58.0

# Install Deno
ENV DENO_INSTALL=/usr/local
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
