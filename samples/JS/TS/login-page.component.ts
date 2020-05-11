import { Component, OnInit } from "@angular/core"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { FormGroup, FormControl } from "@angular/forms"
import { OAuthService, AuthConfig } from "angular-oauth2-oidc"
import { JwksValidationHandler } from "angular-oauth2-oidc-jwks"

import { environment } from "@env"
import { Credentials } from "@app/types"
import * as fromRoot from "@app/state"
import * as AuthActions from "@app/modules/auth/state/actions"

const authConfig: AuthConfig = {}

@Component({
    selector: "app-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent implements OnInit {

    error$: Observable<any>
    loginForm: FormGroup

    constructor(
        private store: Store<fromRoot.State>,
        private oauthService: OAuthService,
    ) {
        this.error$ = this.store.pipe(select(fromRoot.selectAuthError))
        this.loginForm = new FormGroup({
            email: new FormControl(""),
            password: new FormControl(""),
        })
        this.configureOAuth()
    }

    ngOnInit(): void {}

    onSubmit(credentials: Credentials): void {
        this.store.dispatch(AuthActions.login({ credentials }))
    }

    private configureOAuth() {
        this.oauthService.configure(authConfig)
        this.oauthService.loadDiscoveryDocumentAndTryLogin()
    }

    public login() {
        console.log("login() called")
        this.oauthService.initImplicitFlow()
    }

    public logout() {
        console.log("logout() called")
        this.oauthService.logOut()
    }

    public get userName() {
        var claims: any = this.oauthService.getIdentityClaims()
        if (!claims) return null
        return claims.given_name
    }
}
