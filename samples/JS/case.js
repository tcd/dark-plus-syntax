function handleRoute() {
    switch (true) {
        case url.endsWith("/api/v1/auth/login") && method === "POST":
            return authenticate()
        case url.endsWith("/users") && method === "GET":
            return getUsers()
        default:
            // pass through any requests not handled above
            return next.handle(request)
    }
}
