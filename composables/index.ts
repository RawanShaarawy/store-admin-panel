export const useCredentials = () => {
    return useState("user", function() { return{ email: '', password: '' }});
}