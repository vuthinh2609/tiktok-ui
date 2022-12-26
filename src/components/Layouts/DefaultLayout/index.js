import Header from '~/components/Layouts/components/Header';
import SideBar from '~/components/Layouts/components/Sidebar';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
