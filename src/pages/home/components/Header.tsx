export const Header = ({title, logo, children}: any) => {
    return (
        <div>
            <div>{title} {logo}</div>
            
            <ul>
                <li>Home</li>
                <li>SignIn</li>
                <li>SignUp</li>
            </ul>

            {children}
        </div>
    );
};