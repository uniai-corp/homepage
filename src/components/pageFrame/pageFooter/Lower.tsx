import Link from "next/link";

export default function PageFooterLower() {
  return (
    <div className="page-footer-section page-footer-lower">
      <div className="footer-lower-item company-info">
        <dl className="company-info-item">
          <dt>대표이사</dt>
          <dd>백승환</dd>
        </dl>
        <dl className="company-info-item">
          <dt>사업자등록번호</dt>
          <dd>269-87-01967</dd>
        </dl>
        <dl className="company-info-item">
          <dt>E-mail</dt>
          <dd>
            <Link href="mailto:uniai.corp@gmail.com">uniai.corp@gmail.com</Link>
          </dd>
        </dl>
      </div>
      <div className="footer-lower-item address-info">
        <dl className="address-info-item">
          <dt>본사</dt>
          <dd>
            <address>(34134) 대전광역시 유성구 대학로 99 대전 팁스타운 405호</address>
          </dd>
        </dl>
        <dl className="address-info-item">
          <dt>성남지사</dt>
          <dd>
            <address>(13449) 경기 성남시 수정구 대왕판교로 815 기업지원허브 835호</address>
          </dd>
        </dl>
      </div>
    </div>
  );
}
