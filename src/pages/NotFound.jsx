import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function NotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `404 - ${t('page_not_found')} | drawDB`;
  }, [t]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-blue-500 md:w-48 flex items-center justify-center p-8">
            <div className="text-9xl font-bold text-white">404</div>
          </div>
          <div className="p-8 flex-1">
            <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
              Error
            </div>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              {t('page_not_found')}
            </h1>
            <p className="mt-3 text-gray-600">
              {t('page_not_found_description')}
            </p>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {t('useful_links')}
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <Link
                  to="/"
                  className="flex items-center justify-center md:justify-start px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  {t('back_to_home')}
                </Link>
                <a
                  href="https://tools.cmdragon.cn/zh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start px-4 py-2 border border-blue-300 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  {t('explore_more_tools')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
