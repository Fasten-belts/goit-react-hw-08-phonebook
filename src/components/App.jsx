import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/auth-operation';
import { useAuth } from 'hooks';
import { Loader } from './Loader /Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

// export const App = () => {
//   return (
//     <Routes>
//       {/* <Route path="/" element={<Layout />}> */}
//       {/* <Route index element={<Home />} /> */}
//       <Route index element={<Register />} />
//       {/* <Route path="movies" element={<Login />} />
//         <Route path="movies/:movieId" element={<Contacts />} /> */}
//       {/* </Route> */}
//       {/* <Route path="*" element={<Layout />} /> */}
//     </Routes>
//   );
// };

// function App() {
//   const isLoading = useSelector(selectIsLoading);
//   const isError = useSelector(selectIsError);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <ContactForm />
//       {isLoading && <Loader />}
//       {isError &&
//         toast.error('Error please try one more time', {
//           icon: '🚨',
//         })}
//       <Filter />
//       <ContactList />
//       <Toaster position="top-right" reverseOrder={true} />
//     </Container>
//   );
// }

// export { App };
